export default async function Wishlist({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
