import VetList from "./VetList";

const contains = ({ name, specialization, address }, query) => {
    if (name.includes(query)|| specialization.includes(query) || address.includes(query)) {
      return true;
    }
  
    return false;
  };

  export const getVets = (limit = 20, query = "") => {
    return new Promise((resolve, reject) => {
      if (query.length === 0) {
        resolve(_.take(VetList, limit));
      } else {
        const formattedQuery = query.toLowerCase();
        const results = _.filter(Vets, Vet => {
          return contains(Vet, formattedQuery);
        });
        resolve(_.take(results, limit));
      }
    });
  };
  
  export default getVets;