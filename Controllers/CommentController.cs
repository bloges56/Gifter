using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;

        public CommentController(ICommentRepository commentRepo)
        {
            _commentRepo = commentRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_commentRepo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_commentRepo.GetById(id));
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            _commentRepo.Add(comment);
            return Ok(comment);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            if(id != comment.Id)
            {
                return BadRequest();
            }

            _commentRepo.Update(comment);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentRepo.Delete(id);
            return NoContent();
        }
    }
}
