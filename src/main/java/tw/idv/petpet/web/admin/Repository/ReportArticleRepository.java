package tw.idv.petpet.web.admin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tw.idv.petpet.web.admin.Entity.ReportArticleEntity;

@Repository
public interface ReportArticleRepository extends JpaRepository<ReportArticleEntity, Integer> {

}
 