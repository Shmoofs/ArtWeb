import styles from '../../styles/artweb.module.scss'
import { useState } from 'react'

export default function NoteOperations() {
    const [isInputVisible, setInputVisible] = useState(false);
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }
    const [noteTitle, setNoteTitle] = useState('');
    return (
        <>
            <div className={styles.btnContainer}>
                <button
                    className={styles.button}>
                    Add a New Note
                </button>
            </div>
            {isInputVisible ? (
                <div className={styles.inputContainer}>
                    <input 
                    className={styles.input} 
                    placeholder='Enter the Title..' 
                    onChange={(e) => setNoteTitle(e.target.value)}
                    />
            </div>
            ) : (
                <></>
            )}
        </>
        
    )
}