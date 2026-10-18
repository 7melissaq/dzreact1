
import s from './Form.module.css'

export function Form() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className={s.formSection}>
            <div className={s.content}>
                <h2 className={s.title}>
                    Пусть лето не заканчивается
                </h2>

                <p className={s.subtitle}>
                    Новые коллекции, морское настроение
                    и немного солнца в твоей почте.
                </p>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
                <label htmlFor="email" className={s.label}>
                    Твой email
                </label>

                <div className={s.formRow}>
                    <input
                        className={s.input}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />

                    <button className={s.button} type="submit">
                        Подписаться
                    </button>
                </div>

                <p className={s.note}>
                    Подписываясь, ты соглашаешься на обработку
                    персональных данных.
                </p>
            </form>
        </section>
    )
}
