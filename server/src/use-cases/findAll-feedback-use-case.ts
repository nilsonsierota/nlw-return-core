import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface FindAllFeedbackUseCaseResponse {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export class FindAllFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbackRepository) {}

  async execute() {
    return (await this.feedbacksRepository.findAll()) as FindAllFeedbackUseCaseResponse[];
  }
}
