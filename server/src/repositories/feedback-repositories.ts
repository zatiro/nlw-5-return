export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface feedbackRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}