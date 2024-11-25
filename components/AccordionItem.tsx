"use client";

import { useState } from "react";
import { QuestionType } from "@/types";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface AccordionItemProps {
    item: QuestionType;
}

function AccordionItem(props: AccordionItemProps) {
    const [showInfo, setShowInfo] = useState(false);

    const { title, info } = props.item;

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button
                    className="question-btn"
                    onClick={() => setShowInfo(!showInfo)}
                >
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
}
export default AccordionItem;
