export interface ListProps {
    title:string,
    list:ItemProps[] | NoteProps[]
    action?: IconButton
}

export interface ItemProps{
    icon:string,
    title:string,
}

export interface NoteProps{
    icon:string,
    title:string,
    date:string,
    content:string,
    directory: string,    
}

export interface IconButton {
    icon:string,
    handler:()=>{}
}