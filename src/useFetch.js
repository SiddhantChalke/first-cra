import {useState,useEffect} from 'react'

const useFetch =(url)=>{
    const [data,setData]=useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            // abort controler is associated to fetch
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data=>{
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log('fetch aborted')
                    // if abort error occurs, dont update state
                }
                else{
                    setIsPending(false)
                    setError(err.message)
                }
            })
        }, 1000)
        // setTimeout is to delay the loading, dont do this irl
        return () => abortCont.abort()
        // to abort the fetch
    },[url]);
    // url is set as dependancy,i.e.url changes..the fn will rerun
    return {data, isPending, error}
}

export default useFetch