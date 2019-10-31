import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const updateComment = gql`
  mutation updateComment($noteId: ID!, $id: ID!, $title: String!, $description: String!) {
    updateComment(id: $id, input: {noteId: $noteId, title: $title, description: $description}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`
