import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const createComment = gql`
  mutation createComment($noteId: ID!, $title: String!, $description: String!) {
    createComment(input: {noteId: $noteId, title: $title, description: $description}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`
