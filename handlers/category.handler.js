import config from "@/helpers/config";

const validateCategory = (req, res) => {
  const { category_name } = req.body;

  if(
    config.findIndex(
      (x) => x.value.toLowerCase() === category_name.toLowerCase()
    ) > -1
  ){
    return res.status(200).json({
      success: true,
      message: `Category is available to order`,
    });    
  } else {
    return res.status(404).json({
      success: false,
      message: `Not found`,
    });
  }

};

export default validateCategory;
