
export default function Header({title="Title", classes="", textStyles=""}) {
    return (
    <div className={classes}>
      <h1 className={textStyles}>{title}</h1>
    </div>
    );
  }