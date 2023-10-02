import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom';
import Markdown from 'https://esm.sh/react-markdown@9?bundle'
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
      .then((md) => {
        setMdFile(md.text())
      })
      /*       // Parse the md file and store the content
            .then((response) => {
              return response.text(); // Returns a Promise
            })
            .then((mdContent) => {
              console.log(mdContent);
              setMdFile(mdContent); // Now you have the resolved text, set it to state
            }) */
      .catch((error) => {
        console.log(error);
      });
  };


  // Load blog
  useEffect(() => {
    getBlogHandler()
  }, [])

  return (
    <>
      {blog ? (
        <div className={styles.section} >
          <div className={styles.container} >
            <img className={styles.coverImage} src={blog.coverImage} />
            <p className={styles.title} >{blog.title}</p>
            <p>{blog.author}</p>
            <Markdown >
              {mdFile}
            </Markdown>
          </div>
        </div>
      ) : null}
    </>

  )
};

export default BlogViewer;