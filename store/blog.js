import takeRight from "lodash/takeRight"

export const state = () => ({
  posts: [
    {
      title: "JavaScript API Testing",
      description:
        "Learn how to incorporate popular Open Source JavaScript technologies to create an extensible API Testing Framework."
    },
    {
      title: "Creating Cloudwatch Dashboards",
      description:
        "Learn how to create dashboards that can give you an overview of the infrastrcture in your AWS account."
    },
    {
      title: "Serverless with SAM CLI",
      description:
        "Using the AWS SAM CLI we will create a serverless project and deploy it to AWS."
    }
  ]
})

export const getters = {
  posts: ({posts}) => posts,
  topPosts: ({posts}) => takeRight(posts, 3)
}
