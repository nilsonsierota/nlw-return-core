import { FeedbackType, feedbackTypes } from "../WidgetForm";

export function ImageFeedbackTypes(type: string) {
  const feedbackTypeInfo = feedbackTypes[type as FeedbackType];

  return (
    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
  );
}
