import { useEffect, useState } from 'react'

const tabs = [ 'Posts' , 'Comments' , 'Albums']

function Content(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('Posts')
    //1. useEffect(callback)
        // - Gọi callback mỗi khi component re-render

    //2. useEffect(callback, [])
        // - Chỉ gọi callback 1 lần sau khi component mounted

    //3. useEffect(callback, [dependencies]
        // - Callback sẽ được gọi lại mỗi khi dependencies thay đổi.

//---------------------------------Lí thuyết chung của 3 thằng trên-------------------------------//
// 1. Callback luôn được gọi sau khi component mounted
// 
//
//
//---------------------------------Lí thuyết chung của 3 thằng trên-------------------------------//




    useEffect(()=>{
        document.title = title
    })
    useEffect(()=>{
        console.log('type changed');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(()=>{
        const handleScroll = () => {
            console.log(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll)
    }, [])
    return(
        <div>
            {tabs.map(tab => (
                <button 
                    key = {tab}
                    style = {type === tab ? { color: '#fff', backgroundColor: '#333'} : {}}
                    onClick ={ () => setType(tab)}
                >
                {tab}
                </button>
            ))}

            <input
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                        <li key = {post.id} >
                            {post.title || post.name}
                        </li>
                ))}
            </ul>
            {console.log('Rendered component')}
        </div>
        
    )
}


export default Content