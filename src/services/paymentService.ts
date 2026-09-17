export interface PaymentOrder {
  orderId: string;
  noteId: string;
  noteTitle: string;
  amount: number;
  originalPrice: number;
  discount: number;
  couponCode?: string;
  userId: string;
  userEmail: string;
}

export type PaymentGateway = 'esewa' | 'khalti' | 'bank_transfer';

export interface PaymentInitiationResult {
  success: boolean;
  gateway: PaymentGateway;
  referenceId: string;
  redirectUrl?: string;
  message: string;
}

export interface PaymentVerificationResult {
  success: boolean;
  transactionId: string;
  amount: number;
  paidAt: string;
  status: 'COMPLETED' | 'FAILED' | 'PENDING';
  message: string;
}

export class PaymentService {
  /**
   * INITIATE PAYMENT
   * In a live production system, this sends an authorized server-side request to:
   * eSewa (epay / eSewa 2.0 API) or Khalti (epayment/initiate/ API).
   * For this prototype, we simulate a secure demo sandbox.
   */
  static async initiatePayment(
    order: PaymentOrder, 
    gateway: PaymentGateway
  ): Promise<PaymentInitiationResult> {
    // Simulate brief network handshake
    await new Promise((resolve) => setTimeout(resolve, 600));

    const ref = `REF-${gateway.toUpperCase()}-${Date.now().toString().slice(-6)}`;

    return {
      success: true,
      gateway,
      referenceId: ref,
      message: `Demo gateway initiated with ${gateway.toUpperCase()}`
    };
  }

  /**
   * VERIFY PAYMENT
   * In production, the backend receives a callback or webhook with signature validation.
   */
  static async verifyPayment(
    referenceId: string, 
    gateway: PaymentGateway,
    amount: number
  ): Promise<PaymentVerificationResult> {
    // Simulate verification processing
    await new Promise((resolve) => setTimeout(resolve, 900));

    const txnId = `TXN-${gateway.toUpperCase()}-${Math.floor(1000000 + Math.random() * 9000000)}`;

    return {
      success: true,
      transactionId: txnId,
      amount,
      paidAt: new Date().toLocaleDateString('ne-NP'),
      status: 'COMPLETED',
      message: 'Demo भुक्तानी सफलतापूर्वक सम्पन्न भयो (Demo Transaction Successful)'
    };
  }

  /**
   * CHECK PAYMENT STATUS
   */
  static async getPaymentStatus(transactionId: string): Promise<'COMPLETED' | 'PENDING' | 'FAILED'> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return 'COMPLETED';
  }
}
