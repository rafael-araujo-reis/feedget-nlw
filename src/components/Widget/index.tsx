import { useState } from "react";
import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {

  const [isOpenWidget, setIsOpenWidget] = useState(false);
  function isWidgetOpen() {
    setIsOpenWidget(!isOpenWidget);
  }

  return (
    <div className="absolute bottom-5 right-5">
      {isOpenWidget && <p >hover text</p>}
      <button onClick={isWidgetOpen} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>

    </div>
  );
}