import React from 'react';

export function Card (props) {
    return (
        <div className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg bg-white">
       <div className="px-4 py-2">
       <h1 className="text-[50px] text-black font-semibold">{props.theValue}</h1>
   

    </div>
</div>
    );
};