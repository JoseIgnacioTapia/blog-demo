import classes from './post-footer.module.css';

interface PostFooterProps {
  tags: string[];
}

function PostFooter({ tags }: PostFooterProps) {
  return (
    <footer className={classes.footer}>
      {tags.map((tag, index) => (
        <span className={classes.tag} key={index}>
          {tag}
        </span>
      ))}
    </footer>
  );
}

export default PostFooter;
