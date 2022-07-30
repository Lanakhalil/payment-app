using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApplication5.Models
{
    public class Bank
    {
        [Key]
        public int BanklId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string BankName { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string BankAddress { get; set; }

        public List<PaymentDetail> PaymentDetails{ get; set; }

    }
}
