import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  icon: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pricing-wrapper">
      @for (plan of plans(); track plan.name) {
        <div class="pricing-card" [class.popular]="plan.popular">
          @if (plan.popular) {
            <div class="badge">Most Popular</div>
          }
          <div class="plan-icon">{{ plan.icon }}</div>
          <div class="plan-name">{{ plan.name }}</div>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>
          <ul class="features">
            @for (feature of plan.features; track feature) {
              <li>{{ feature }}</li>
            }
          </ul>
          <button class="cta-btn">Get Started</button>
        </div>
      }
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :host {
      font-family: 'Inter', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #f0f4ff;
    }

    .pricing-wrapper {
      display: flex;
      gap: 20px;
      padding: 40px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .pricing-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 32px 28px;
      width: 240px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.07);
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;
      border: 2px solid transparent;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .pricing-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 36px rgba(0,0,0,0.12);
    }

    .pricing-card.popular {
      border-color: #6366f1;
      background: linear-gradient(160deg, #6366f1 0%, #4f46e5 100%);
      color: #fff;
    }

    .badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #f59e0b;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 14px;
      border-radius: 20px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .plan-icon {
      font-size: 28px;
    }

    .plan-name {
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #6b7280;
    }

    .pricing-card.popular .plan-name {
      color: rgba(255,255,255,0.75);
    }

    .price {
      display: flex;
      align-items: flex-end;
      gap: 2px;
    }

    .currency {
      font-size: 18px;
      font-weight: 700;
      color: #374151;
      margin-bottom: 4px;
    }

    .pricing-card.popular .currency {
      color: #fff;
    }

    .amount {
      font-size: 42px;
      font-weight: 800;
      line-height: 1;
      color: #111827;
    }

    .pricing-card.popular .amount {
      color: #fff;
    }

    .period {
      font-size: 13px;
      color: #9ca3af;
      margin-bottom: 6px;
    }

    .pricing-card.popular .period {
      color: rgba(255,255,255,0.6);
    }

    .features {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0;
      margin: 0;
    }

    .features li {
      font-size: 13px;
      color: #4b5563;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pricing-card.popular .features li {
      color: rgba(255,255,255,0.85);
    }

    .features li::before {
      content: '✓';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #e0e7ff;
      color: #6366f1;
      font-size: 10px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .pricing-card.popular .features li::before {
      background: rgba(255,255,255,0.25);
      color: #fff;
    }

    .cta-btn {
      margin-top: auto;
      padding: 11px 0;
      border-radius: 12px;
      border: none;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      background: #eef2ff;
      color: #6366f1;
    }

    .pricing-card.popular .cta-btn {
      background: #fff;
      color: #6366f1;
    }

    .cta-btn:hover {
      opacity: 0.88;
      transform: scale(1.02);
    }
  `]
})
export class DashboardComponent {
  plans = signal<PricingPlan[]>([
    {
      icon: '🌱',
      name: 'Starter',
      price: 9,
      period: '/mo',
      popular: false,
      features: ['5 Projects', '10 GB Storage', 'Email Support', 'Basic Analytics']
    },
    {
      icon: '🚀',
      name: 'Pro',
      price: 29,
      period: '/mo',
      popular: true,
      features: ['Unlimited Projects', '100 GB Storage', 'Priority Support', 'Advanced Analytics']
    },
    {
      icon: '🏢',
      name: 'Enterprise',
      price: 79,
      period: '/mo',
      popular: false,
      features: ['Unlimited Projects', '1 TB Storage', '24/7 Dedicated Support', 'Custom Integrations']
    }
  ]);
}