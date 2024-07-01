import React from 'react'

interface SingleEmbedProps {
    title: string,
    subTitle: string,
    icon: React.ReactNode,
    handleClick?: () => void
}

export default function SingleEmbed({title, subTitle, icon, handleClick}: SingleEmbedProps) {
    return (
        <div className="p-2.5 pl-4 cursor-pointer hover:bg-[#F7FCF8] flex items-start gap-2"
            onClick={handleClick}
        >
            {icon}
            <div className="flex flex-col gap-.5">
                <span className="text-[12.5px] text-[#010E05]">{title}</span>
                <span className="text-[.6rem] text-[#343E37]/50">{subTitle}</span>
            </div>
        </div>
    )
}
