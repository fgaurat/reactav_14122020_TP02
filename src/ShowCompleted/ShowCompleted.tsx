import React from 'react'

interface IProps{
    showCompleted:boolean;
    onShowCompleted:(event: React.FormEvent<HTMLInputElement>)=>void;
}

export default function ShowCompleted({showCompleted,onShowCompleted}:IProps) {
    return (
        <div>
            Completed?
            <input type="checkbox" name="" id="" onChange={onShowCompleted} checked={showCompleted}/>
        </div>
    )
}
