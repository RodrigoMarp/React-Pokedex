import styles from "./styles.module.css";

export default function PokeButton({ name, width, height, onclick }) {
    return (
        <button className={ styles.pokebtn } onClick={ onclick }>
            { name }
        </button>
    );
}
