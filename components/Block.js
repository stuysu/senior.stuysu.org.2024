import block from '../styles/Block.module.scss';

export default function Block({ children, color }) {
  return (
    <section className={block.section} style={{backgroundColor: color}}>
      <div className={block.content}>
        {children}
      </div>
    </section>
  );
}
