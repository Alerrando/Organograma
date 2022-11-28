import { MinusCircle, PlusCircle } from "phosphor-react";

type DivisõesProps = {
  divisões: any[];
};

export function Divisões(props: DivisõesProps) {
  const { divisões } = props;

  return (
    <>
      <div
        className={`border-b-${
          divisões.length > 1 ? "2" : "0"
        } h-0 border-[#dbdbdb] mx-[79px]`}
      ></div>
      <div className="w-auto flex justify-between gap-7">
        {divisões.map((divisão, index) => (
          <div className="block" key={index}>
            <div className="w-0 h-10 border-l-2 border-[#dbdbdb] mx-auto"></div>
            <div className="w-[158px] h-20 flex items-center justify-center relative border-2 border-gray-50 rounded-md text-center">
              <div className="grid">
                <h2 className="text-[13px]">{divisão.cargo}</h2>
                <h2 className="text-[13px] font-semibold">{divisão.nome}</h2>
                <p className="text-[13px]">
                  Quantidade de seções {divisão.length}
                </p>
              </div>
            </div>
            <>
              <PlusCircle size={32} className="mx-auto cursor-pointer" />
            </>
          </div>
        ))}
      </div>
    </>
  );
}
