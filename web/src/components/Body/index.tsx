import { useApi } from "../../hooks/useApi";
import DialogScheenshoot from "../DialogScreenshoot";
import { ImageFeedbackTypes } from "../ImageFeedbacktType";

export type FeedbackTypesProps = {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
};

const feedbacksFake = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {},
};

export function Body() {
  const { data: feedbacks } = useApi<FeedbackTypesProps[]>("/feedbacks");

  return (
    <div className="flex flex-col px-40 min-h-225 sm:px-40 xs:px-6">
      <div
        className="flex min-h-[124px] h-full w-280 px-14 bg-zinc-700 
        my-12 text-zinc-400 justify-start items-center"
      >
        Experimente enviar um feedback de um bug na aplicação 🐛
      </div>

      {feedbacks ? (
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
          xl:grid-cols-4 2xl:grid-cols-4 gap-6"
        >
          {feedbacks?.map((value) => {
            return (
              <div
                key={value.id}
                className="bg-zinc-700 rounded-lg w-88 h-80 flex-1 flex flex-col
                        items-center justify-around gap-2 border-2 border-transparent 
                        hover:border-brand-500 focus:border-brand-500 
                        focus:outline-none px-1"
              >
                <ImageFeedbackTypes type={value.type} />

                <textarea
                  disabled
                  readOnly
                  defaultValue={value.comment}
                  className="w-full h-full p-2 text-sm placeholder-zinc-400 
                  text-zinc-100 border-zinc-600 bg-transparent rounded-md 
                  focus:border-brand-500 focus:ring-brand-500 focus:ring-1 
                  focus:outline-none resize-none scrollbar-thumb-zinc-700 
                  scrollbar-track-transparent scrollbar-thin"
                ></textarea>

                {value.screenshot ? (
                  <DialogScheenshoot screenshot={value.screenshot} />
                ) : (
                  <span className="p-3.5">Nenhum Screenshot</span>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
                      xl:grid-cols-4 2xl:grid-cols-4 gap-6"
        >
          {Object.entries(feedbacksFake).map(([key, value]) => {
            return (
              <div
                key={key}
                className="bg-zinc-700 rounded-lg w-88 h-80 flex-1 flex flex-col
                        items-center justify-around gap-2 border-2 border-transparent 
                        hover:border-brand-500 focus:border-brand-500 
                        focus:outline-none px-1 animate-pulse"
              >
                <span className="w-10 h-10 items-center justify-center flex">
                  Carregando Feedbacks...
                </span>
                <textarea
                  disabled
                  readOnly
                  className="w-full h-full p-2 text-sm placeholder-zinc-400 
                  text-zinc-100 border-zinc-600 bg-transparent rounded-md 
                  focus:border-brand-500 focus:ring-brand-500 focus:ring-1 
                  focus:outline-none resize-none scrollbar-thumb-zinc-700 
                  scrollbar-track-transparent scrollbar-thin"
                ></textarea>

                <span className="p-7"></span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
