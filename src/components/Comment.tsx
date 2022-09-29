import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
    comment: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment({comment, onDeleteComment}:CommentProps){
    
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(comment);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    
    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/diego3g.png" 
                alt=""
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Borja</strong>
                            <time title="11 de Maio as 08:13h" dateTime="2022-09-25 8:13:30">Cerca de 1h atras</time>
                        </div>
                        <button title="Deletar comentario" onClick={handleDeleteComment}>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}