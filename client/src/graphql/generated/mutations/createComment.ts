import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const createComment = gql`
  mutation createComment($title: String!, $description: String!) {
    createComment(input: {title: $title, description: $description}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`
