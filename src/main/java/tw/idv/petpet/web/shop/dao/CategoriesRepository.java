package tw.idv.petpet.web.shop.dao;

import org.springframework.data.repository.CrudRepository;

import tw.idv.petpet.web.shop.entity.Categories;
import tw.idv.petpet.web.shop.entity.Product;

public interface CategoriesRepository extends CrudRepository<Categories, Integer>{

}
