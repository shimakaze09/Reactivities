using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces;

public interface IPhotoAccessor
{
    Task<PhotoUploadResult> AppPhoto(IFormFile file);
    Task<string> DeletePhoto(string publicId);
}
