export const FetchCategory = async (name: String | Number): Promise<any> => {
    let isLoading = true;
    let errorOccurred = false;
  
    try {
      const { data, pending } = await useFetch('/api/getCategory', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          slug: name
        }
      });
  
      isLoading = false;
      return data;
  
    } catch (error) {
      console.error(">>>>>> FetchCategory error:", error);
      isLoading = false;
      errorOccurred = true;
      throw error;
    }  
    if (errorOccurred) {
      console.log("Error occurred during fetch");
      throw new Error("Failed to fetch category data");
    }
    return null; 
  };