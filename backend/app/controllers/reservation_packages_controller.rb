class ReservationPackagesController < ApplicationController
  before_action :set_reservation_package, only: %i[ show update destroy ]

  # GET /reservation_packages
  def index
    @reservation_packages = ReservationPackage.all

    render json: @reservation_packages
  end

  # GET /reservation_packages/1
  def show
    render json: @reservation_package
  end

  # POST /reservation_packages
  def create
    @reservation_package = ReservationPackage.new(reservation_package_params)

    if @reservation_package.save
      render json: @reservation_package, status: :created, location: @reservation_package
    else
      render json: @reservation_package.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_packages/1
  def update
    if @reservation_package.update(reservation_package_params)
      render json: @reservation_package
    else
      render json: @reservation_package.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_packages/1
  def destroy
    @reservation_package.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_package
      @reservation_package = ReservationPackage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_package_params
      params.require(:reservation_package).permit(:reservation_id, :package_id)
    end
end
