const BlogList = ( {blogs, title, blogDelete} ) =>{

    return(

        <div className="blog-list">

            <h2>{title}</h2>



         {

                blogs.map(blog =>(

                    <div className="blog-preview" key={blog.id}>

                        <h2>{blog.title}</h2>

                        <p>Written by {blog.author}</p>

                        <button onClick={() => blogDelete(blog.id)}>Delete Blog</button>

                    </div>

                ))

           } 

        </div>

    )

}

export default BlogList