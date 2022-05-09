import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { ImageFeedbackTypes } from "../ImageFeedbacktType";

type FeedbackTypesProps = {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
};

export function Body() {
  const [feedbacks, setFeedbacks] = useState<FeedbackTypesProps[]>();

  async function handleFindAllFeedback() {
    await api
      .get<FeedbackTypesProps[]>("/feedbacks")
      .then((response) => setFeedbacks(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    handleFindAllFeedback();
  }, []);

  return (
    <div className="flex flex-col px-40 min-h-225 ">
      <div
        className="flex 
      min-h-[124px] h-full w-280 px-14 
      bg-zinc-700 my-12 text-zinc-400 
      justify-start items-center "
      >
        Experimente enviar um feedback de um bug na aplicação 🐛
      </div>

      {feedbacks ? (
        <div
          className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 
        gap-6"
        >
          {feedbacks?.map((value) => {
            return (
              <button
                key={value.id}
                type="button"
                className="bg-zinc-700 rounded-lg w-88 h-80 flex-1 flex flex-col
              items-center justify-center gap-1 border-2 border-transparent 
              hover:border-brand-500 focus:border-brand-500 
              focus:outline-none"
              >
                {/* <ImageFeedbackTypes type={value.type} /> */}

                <span>{value.comment}</span>
                <span>{value.screenshot}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div>Nao tenho feedbacks</div>
      )}
    </div>
  );
}
