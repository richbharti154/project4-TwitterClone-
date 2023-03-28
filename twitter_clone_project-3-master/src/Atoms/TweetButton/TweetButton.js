import tweetbutton from './tweetbutton.module.css'

const TweetButton = (props) => {

    return (
        <div className={tweetbutton.mainComponent}>
            <button onClick={props.onClick} className={tweetbutton.tweetButton} >{props.Name} </button>
        </div>
    )
}

export default TweetButton