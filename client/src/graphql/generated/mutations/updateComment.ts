import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const updateComment = gql`
  mutation updateComment($id: ID!, $title: String!, $description: String!) {
    updateComment(id: $id, input: {title: $title, description: $description}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`
