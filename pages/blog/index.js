import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'

export default function Blog ({ posts }) {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero
        title='Blog'
        subtitle='Recent Possts'
      />
      <Posts posts={posts} />
    </Container>
  )
}
export async function getStaticProps () {
  const posts = await getAllPosts(4)

  return {
    props: {
      posts
    }
  }
}
