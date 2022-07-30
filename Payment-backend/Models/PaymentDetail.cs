using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication5.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }


        [Required]
        [Column(TypeName ="varchar(16)")]
        public string cardNumber { get; set; }

        [Required]
        [Column(TypeName ="varchar(5)")]
        public string ExpirationDate { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]

        public string SecurityCode { get; set; }

        [Required]
        public int BanklId { get; set; }
        public Bank Bank { get; set; }

        public int CustomerId { get; set; }

        public Customer Customer { get; set; }

    }
}
