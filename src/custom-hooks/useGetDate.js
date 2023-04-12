import  {useEffect, useState} from 'react';
import {db} from '../firebase.config'
import {collection, onSnapshot} from "firebase/firestore";

const UseGetDate = (collectionName) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const collectionRef = collection(db, collectionName)

    useEffect(() =>{

        const getDate = async()=>{

            //   =======  firebase firestore realtime data update  ===========
             await onSnapshot(collectionRef,(snapshot) =>{
                 setData(snapshot.docs.map(doc =>({...doc.data(), id: doc.id})));
                 setLoading(false)
             })
        }
        getDate()

    }, [])


    return (
        {data}
    )

};

export default UseGetDate;