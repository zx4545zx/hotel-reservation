class ListPackageServicesController < ApplicationController
  before_action :set_list_package_service, only: %i[ show update destroy ]

  def index
    @list_package_services = ListPackageService.all

    render json: @list_package_services
  end

  def show
    render json: @list_package_service
  end

  def create
    @list_package_service = ListPackageService.new(list_package_service_params)

    if @list_package_service.save
      render json: @list_package_service
    else
      render json: @list_package_service.errors, status: :unprocessable_entity
    end
  end

  def update
    if @list_package_service.update(list_package_service_params)
      render json: @list_package_service
    else
      render json: @list_package_service.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list_package_service.destroy
  end

  private
    def set_list_package_service
      @list_package_service = ListPackageService.find(params[:id])
    end

    def list_package_service_params
      params.require(:list_package_service).permit(:packages_id, :services_id, :value)
    end
end
