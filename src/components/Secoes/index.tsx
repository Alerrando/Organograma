import { MinusCircle, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { jsonOrgan } from "../../../database";
import { Divisões } from "./Divisões";

type SeçõesProps = {
  seções: any[];
};

export function Seções(props: SeçõesProps) {
  const { seções } = props;
  const [dropDowns, setDropDowns] = useState<any[]>(seções)

  return (
    <>
      <div className={`border-b-${seções.length > 1 ? "2" : "0"} h-0 border-[#dbdbdb] mx-[79px]`}></div>
      <div className="w-auto flex justify-between gap-7">
        {dropDowns.map((seção, index) => (
          <div className="block" key={index}>
            <div className="w-0 h-10 border-l-2 border-[#dbdbdb] mx-auto"></div>
            <div className="w-[158px] h-20 flex items-center justify-center relative border-2 border-gray-50 rounded-md text-center">
              <div className="grid">
                <h2 className="text-[13px]">{seção.cargo}</h2>
                <h2 className="text-[13px] font-semibold">{seção.nome}</h2>
                <p className="text-[13px]">
                  Quantidade de seções {seção.divisões.length}
                </p>
              </div>
            </div>
            {seção.drop ? (
              <>
                <MinusCircle
                  size={32}
                  className="mx-auto cursor-pointer"
                  onClick={() => HandleDropDownOff(seção)}
                />
                <div className="w-0 h-10 border-l-2 border-bg-[#dbdbdb] mx-auto"></div>
                <Divisões divisões={seção.divisões} />
              </>
            ) : (
              <>
                <PlusCircle
                  size={32}
                  className="mx-auto cursor-pointer"
                  onClick={() => HandleDropDownOn(seção)}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );

  function HandleDropDownOn(seção: any) {
      setDropDowns((prevState) => {
        return [...prevState.map(a => {
            if (a.nome === seção.nome) {
              return {...a, drop: true};
            }
            return a;
            })];      
      });
  }

  function HandleDropDownOff(seção: any) {
      setDropDowns((prevState) => {
        return [...prevState.map(a => {
            if (a.nome === seção.nome) {
              return {...a, drop: false};
            }
            return a;
          })];
      });
  }
}