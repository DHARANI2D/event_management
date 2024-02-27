// Photography.js
import CategoryList from './CategoryList';

const photoData = [
  // ...
];

const Photography = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Venues</h1>
      <CategoryList items={photoData} category="photos" />
    </div>
  );
};

export default Photography;
