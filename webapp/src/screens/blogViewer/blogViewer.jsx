import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'https://esm.sh/remark-breaks@4'
import remarkGfm from 'https://esm.sh/remark-gfm@4?bundle'
// Logic
import { getBlog } from '../../logic/backendLogic'

const BlogViewer = () => {

  const { blogId } = useParams();
  const [blog, setBlog] = useState();
  const [mdFile, setMdFile] = useState();

  // Get Blog
  const getBlogHandler = () => {
    getBlog(blogId)
      .then((data) => {
        setBlog(data);
        return data;
      })
      // Get our md file link
      .then((data) => {
        return fetch(data.blog)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((md) => {
        setMdFile(md)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // Load blog
  useEffect(() => {
    getBlogHandler()
  }, [])

  const Image = (props) => {
    return <img {...props} style={{ maxWidth: '100%' }} />
  }

  return (
    <>
      {blog ? (
        <div className={styles.section} >
          <div className={styles.container} >
            <img className={styles.coverImage} src={blog.coverImage} />
            <p className={styles.title} >{blog.title}</p>
            <p>{blog.author}</p>
            <ReactMarkdown components={{ img: Image }} remarkPlugins={[remarkGfm, remarkBreaks]}>
              {mdFile}
            </ReactMarkdown>
          </div>
        </div>
      ) : null}
    </>

  )
};

export default BlogViewer;