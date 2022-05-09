import { X } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface ImageProps {
  type: string;
}

export function ImageFeedbackTypes({ type }: ImageProps) {
  const feedbackTypeInfo = feedbackTypes[type as FeedbackType];

  return (
    <div className="py-2 text-xl leading-6 flex items-center gap-2 w-full justify-center">
      <img
        src={feedbackTypeInfo.image.source}
        alt={feedbackTypeInfo.image.alt}
        className="w-6 h-6"
      />
      {feedbackTypeInfo.title}

      <button type="button" className="text-zinc-400 hover:text-zinc-100 ">
        <X weight="bold" className="w-4 h-4" />
      </button>
    </div>
  );
}
