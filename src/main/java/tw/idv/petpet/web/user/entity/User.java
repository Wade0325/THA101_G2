package tw.idv.petpet.web.user.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tw.idv.petpet.core.pojo.Core;

@Entity
@Table
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User extends Core{
	/**
	 * 會員資料
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer userId;
    private String userAccount;
    private String userPassword;
    private String userName;
    private String userTel;
    private String userAddr;
    private byte[] userPic;
    private String userRep;
    private String userBan;
    private Date userCreateTime;
    private Date userUpdateTime;
    private String userStatus;
    private String userVai;
}
