import moment from 'moment';

class PropertySchema {
  constructor(property) {
    (this.title = property.title),
      (this.description = property.description),
      (this.main_image = property.main_image),
      (this.advert_type_id = property.advert_type_id),
      (this.sub_categ_id = property.sub_categ_id),
      (this.createdAt = moment().format()),
      (this.expiredAt = property.expiredAt),
      (this.status = true);
  }
  static landDetails(landDetail) {
    return {
      property_id: landDetail.property_id,
      plot_size: landDetail.plot_size,
      longitude: landDetail.longitude,
      latutide: landDetail.latutide,
    };
  }
  static realestateDetails(realestDetail) {
    return {
      property_id: realestDetail.property_id,
      bedroom: realestDetail.bedroom,
      bathroom: realestDetail.bathroom,
      floors: realestDetail.floors,
      living_area: realestDetail.living_area,
      plot_size: realestDetail.plot_size,
      parking: realestDetail.parking,
      longitude: realestDetail.longitude,
      latutide: realestDetail.latutide,
    };
  }
  static carDetails(carDetail) {
    return {
      property_id: carDetail.property_id,
      make: carDetail.make,
      model: carDetail.model,
      year: carDetail.year,
      transmission: carDetail.transmission,
      fuel: carDetail.fuel,
    };
  }
  static proImages(images) {
    return {
      property_id: images.property_id,
      image_path: images.images_path,
    };
  }
}

export default PropertySchema;
