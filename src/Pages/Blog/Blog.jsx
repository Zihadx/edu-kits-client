const Blog = () => {
  return (
    <div className=" mx-auto pt-16">
     <div className="px-4 md:px-24">
     <h1 className="text-5xl md:text-7xl text-[#f06d4f] font-bold my-8">
        Answer the following questions:
      </h1>
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold my-4">
          1. Compare SQL and NoSQL databases?
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold my-4">
          2. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold my-4">
          3. What is express js? What is Nest JS?
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold my-4">
          1. What is MongoDB aggregate and how does it work?
        </h1>
      </div>
      <div className="my-12">
        <h2 className="text-xl font-bold">Compare SQL and NoSQL databases?</h2>
        <p className="font-bold text-sm my-3">
          <span className="ms-4">
            SQL and NoSQL are two contrasting approaches to database management
            systems. SQL databases are based on a structured, tabular data model
            where data is organized into tables with predefined schemas. They
            use SQL as the query language, providing a standardized and powerful
            way to retrieve, manipulate, and manage relational data. <br />{" "}
          </span>{" "}
          <span className="ms-4">
            NoSQL databases offer a more flexible approach to data storage and
            retrieval. They support various data models, including key-value,
            document, columnar, and graph-based models. NoSQL databases are
            designed for scalability and high-performance, allowing horizontal
            scaling by distributing data across multiple servers. They often
            have a dynamic schema, allowing for schema-less data storage, and
            they may use their own query languages specific to the data model or
            provide SQL-like interfaces.{" "}
          </span>
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold">Compare SQL and NoSQL databases?</h2>
        <p className="font-bold text-sm my-3">
          <span className="ms-4">
            An access token is a credential issued by an authentication server
            after a successful login or authentication process. It represents
            the authorization granted to a user or client application to access
            specific resources on a server. <br />{" "}
          </span>{" "}
          <span className="ms-4">
            A refresh token is a credential used to obtain a new access token
            when the current access token expires. It is typically issued
            alongside an access token during the authentication process.
          </span>
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold">
          What is express js? What is Nest JS?
        </h2>
        <p className="font-bold text-sm my-3">
          <span className="ms-4">
            Express.js is a fast and minimalist web application framework for
            Node.js. It provides a simple and flexible set of features for
            building web applications and APIs. Express.js focuses on providing
            a robust foundation for web development while allowing developers
            the freedom to choose additional libraries and tools to suit their
            specific needs. With Express.js, developers can easily handle
            routing, request/response handling, middleware integration, and
            other common web development tasks.
            <br />{" "}
          </span>{" "}
          <span className="ms-4">
            Nest.js, on the other hand, is a progressive and opinionated
            framework for building scalable and maintainable server-side
            applications. It is built on top of Node.js and utilizes TypeScript
            as its primary language. Nest.js takes inspiration from various
            frameworks, including Angular and Express, to provide a structured
            and modular approach to application development. It emphasizes the
            use of decorators, dependency injection, and a modular architecture
            to enable developers to build robust and scalable applications.
            Nest.js provides built-in support for features like routing,
            dependency injection, middleware, and more, making it well-suited
            for building complex, enterprise-level applications.{" "}
          </span>
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p className="font-bold text-sm my-3">
          <span className="ms-4">
            MongoDB aggregate method in MongoDB is used for advanced data
            processing and aggregation operations. It accepts an array of
            pipeline stages that define a sequence of operations to be performed
            on the documents. Each stage applies a specific transformation or
            computation to the input documents and passes the results to the
            next stage. The pipeline can include operations like filtering,
            grouping, sorting, projecting, and performing calculations. MongoDB
            processes the documents through the pipeline and returns the final
            result set. This powerful feature allows for flexible and efficient
            data analysis and aggregation in MongoDB.
          </span>
        </p>
      </div>
     </div>
    </div>
  );
};

export default Blog;
