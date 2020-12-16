import React ,{useState,useMemo} from 'react'

function longWork(t=500) {
    console.log("longWork")
    const end = Date.now()+t
    while (Date.now() < end){} 
    console.log("end longWork")
}

function toUpper(s:string){
    longWork()
    return s.toUpperCase()
}

export default function Concat() {


    const [a,setA] = useState("")
    const [b,setB] = useState("")

	const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        if(target.getAttribute("name") ==='a'){
            setA(target.value)
        }
        if(target.getAttribute("name") ==='b'){
            setB(target.value)
        }
    }
    
    //const result = toUpper(b)
    const result = useMemo(() => toUpper(b), [b])


    return (
        <>
            <input type="text" name="a" onChange={onChange} value={a}/>
            <input type="text" name="b" onChange={onChange} value={b}/>
            Result : {a} {result}
        </>
    )
}

